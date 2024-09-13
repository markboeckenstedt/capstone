class ActivitiesController < ApplicationController
  before_action :set_activity, only: [:show, :update, :destroy]

  def index
    activities = Activity.order(created_at: :desc).limit(10)
    render json: activities
  end

  def show
    render :show
  end

  def create
    @activity = Activity.new(activity_params)

    if @activity.save
      render :show, status: :created
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  def update
    if @activity.update(activity_params)
      render :show, status: :ok
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @activity.destroy
    head :no_content
  end

  private

  def set_activity
    @activity = Activity.find(params[:id])
  end

  def activity_params
    params.require(:activity).permit(:communication_type, :notes, :date, :contact_id)
  end
end
