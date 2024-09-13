class AddCompanyIdToActivities < ActiveRecord::Migration[7.1]
  def change
    add_column :activities, :company_id, :integer
  end
end
