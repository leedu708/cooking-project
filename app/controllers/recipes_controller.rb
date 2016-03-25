class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all.to_json
    respond_to do |format|
      format.json { render :json => @recipes, :status => 200 }
    end
  end

  def show
    @recipe = Recipe.find_by_id(params[:id]).to_json(
      :include => [ { :items => { :methods => :name } } ] )
    respond_to do |format|
      format.json { render :json => @recipe, :status => 200 }
    end
  end

end