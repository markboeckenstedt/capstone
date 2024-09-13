json.extract! contact, :id, :first_name, :last_name, :email, :phone_number
json.company do
  json.partial! 'companies/company', company: contact.company
end
