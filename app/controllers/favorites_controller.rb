class FavoritesController < ApplicationController
  def index
    @favorites = current_user.favorited_recipes.to_json
    respond_to do |format|
      format.json { render :json => @favorites, :status => 200 }
    end
  end
end
