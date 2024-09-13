class Company < ApplicationRecord
  has_many :contacts
  has_many :activities, through: :contacts
end
