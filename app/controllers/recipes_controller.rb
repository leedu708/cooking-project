class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all.to_json
    respond_to do |format|
      format.json { render :json => @recipes, :status => 200 }
    end
  end

  def show
    @recipe = Recipe.find_by_id(params[:id]).to_json(
      :include => [ { :items => { :methods => :name } } ],
      :methods => [:image_urls] )
    respond_to do |format|
      format.json { render :json => @recipe, :status => 200 }
    end
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      respond_to do |format|
        format.json { render :json => @recipe, :status => 200 }
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
              { :item_attributes => [
                  :ingredient_id,
                  :amount,
                  :notes ] },
              { :step_attributes => [
                  :instructions,
                  :recipe_order ] } )
  end
  
end