require "test_helper"

class ActivitiesControllerTest < ActionDispatch::IntegrationTest
  test "index" do
    get "/activities.json"
    assert_response 200

    data = JSON.parse(response.body)
    assert_equal Activity.count, data.length
  end
end
