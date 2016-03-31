class IngredientsController < ApplicationController

  def index
    @ingredients = Ingredient.all.to_json
    respond_to do |format|
      format.json { render :json => @ingredients, :status => 200 }
    end
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)

    if @ingredient.save
      respond_to do |format|
        format.json { render :json => @ingredient, :status => 201 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => :true, :status => 401 }
      end
    end
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name)
  end

end
