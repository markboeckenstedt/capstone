class RemoveCompanyIdFromActivities < ActiveRecord::Migration[7.1]
  def change
    remove_column :activities, :company_id, :integer
  end
end
