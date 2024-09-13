json.extract! activity, :id, :communication_type, :notes, :date, :created_at, :updated_at

json.contact do
  json.partial! 'contacts/contact', contact: activity.contact
end
