class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username
    devise_parameter_sanitizer.for(:sign_up) << :first_name
    devise_parameter_sanitizer.for(:sign_up) << :last_name
  end

  def require_admin

    unless current_user && current_user.admin
      flash[:danger] = "Unauthorized Access!"
      respond_to do |format|
        format.json { render :nothing => :true, :status => 401 }
        format.html { redirect_to root_path }
      end
    end

  end
end
