class ContactsController < ApplicationController
  before_action :set_contact, only: [:show, :update, :destroy]

  def index
    @contacts = Contact.all
    render :index
  end

  def show
    render :show
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      render :show, status: :created
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def update
    if @contact.update(contact_params)
      render :show, status: :ok
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def destroy
    contact = Contact.find_by(id: params[:id])
    if contact
      contact.destroy
      render json: { message: "Contact deleted successfully" }, status: :ok
    else
      render json: { error: "Contact not found" }, status: :not_found
    end
  end

  private

  def set_contact
    @contact = Contact.find(params[:id])
  end

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :email, :phone, :company_id)
  end
end
