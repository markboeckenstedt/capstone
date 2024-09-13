class Contact < ApplicationRecord
  belongs_to :company
  has_many :activities, dependent: :destroy
end
