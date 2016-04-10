class UsersController < ApplicationController
  def show
    @user = User.find_by_id(params[:id]).to_json
    respond_to do |format|
      format.json { render :json => @user, :status => 200 }
    end
  end
end
