class Activity < ApplicationRecord
  belongs_to :contact
  validates :communication_type, :notes, :date, presence: true
end
