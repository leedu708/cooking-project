class IngredientsController < ApplicationController

  def index
    @ingredients = Ingredient.all.to_json
    respond_to do |format|
      format.json { render :json => @ingredients, :status => 200 }
    end
  end

end
