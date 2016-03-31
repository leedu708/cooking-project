class RecipesController < ApplicationController
  before_filter :process_params, only: [:create]

  def index
    @recipes = Recipe.all.to_json
    respond_to do |format|
      format.json { render :json => @recipes, :status => 200 }
    end
  end

  def show
    @recipe = Recipe.find_by_id(params[:id]).to_json(
      :include => [ { :items => { :methods => :name } } ]
      # :methods => [:image_urls] )
      )
    respond_to do |format|
      format.json { render :json => @recipe, :status => 200 }
    end
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      respond_to do |format|
        format.json { render :json => @recipe, :status => 201 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => :true, :status => 401 }
      end
    end
  end

  def update
    @recipe = Recipe.find_by_id(params[:id])
    if @recipe.update(recipe_params)
      respond_to do |format|
        format.json { render :json => @recipe, :status => 200 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => :true, :status => 401 }
      end
    end
  end

  private

  def recipe_params
    params.require(:recipe).
      permit( :title,
              :description,
              { :items_attributes => [
                  :ingredient_id,
                  :weight,
                  :volume,
                  :notes ] },
              { :steps_attributes => [
                  :instructions,
                  :recipe_order ] } )
  end

  def process_params
    if params[:items]
      params[:recipe][:items_attributes] = []
      params[:items].each { |att| params[:recipe][:items_attributes].push(att) }
    end

    if params[:steps]
      params[:recipe][:steps_attributes] = []
      params[:steps].each { |att| params[:recipe][:steps_attributes].push(att) }
    end
  end
  
end