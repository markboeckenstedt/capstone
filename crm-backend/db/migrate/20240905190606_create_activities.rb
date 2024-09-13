class CreateActivities < ActiveRecord::Migration[7.1]
  def change
    create_table :activities do |t|
      t.string :type
      t.text :notes
      t.datetime :date
      t.references :contact, null: false, foreign_key: true

      t.timestamps
    end
  end
end
