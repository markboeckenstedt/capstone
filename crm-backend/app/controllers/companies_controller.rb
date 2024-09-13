class CompaniesController < ApplicationController
  before_action :set_company, only: [:show, :update, :destroy]

  def index
    @companies = Company.all
    render :index
  end

  def show
    @company = Company.includes(:contacts).find(params[:id])
    render json: @company, include: :contacts
  end

  def create
    @company = Company.new(company_params)

    if @company.save
      render :show, status: :created
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  def update
    if @company.update(company_params)
      render :show, status: :ok
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @company.destroy
    head :no_content
  end

  private

  def set_company
    @company = Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(:name, :website)
  end
end
