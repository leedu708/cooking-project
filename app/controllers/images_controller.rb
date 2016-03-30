class ImagesController < ApplicationController
  before_filter :process_params, only: [:create]

  def create
    @image = Image.new(image_params)
    if @image.save
      respond_to do |format|
        format.json { render :nothing => :true, :status => 201 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => :true, :status => 401 }
      end
    end
  end

  private

  def image_params
    params.require(:image).permit(:recipe_id, :attachment)
  end

  def process_params
    params[:image] = params[:image].with_indifferent_access

    if params[:file]
      params[:image][:attachment] = params[:file]
    end
  end

end
