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
        format.json { render :nothing => :true, :status => 201 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => :true, :status => 422 }
      end
    end
  end

  def destroy
    @ingredient = Ingredient.find_by_id(params[:id])

    if @ingredient && @ingredient.destroy
      respond_to do |format|
        format.json { render :nothing => :true, :status => 204 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => :true, :status => 422 }
      end
    end
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name)
  end

end
