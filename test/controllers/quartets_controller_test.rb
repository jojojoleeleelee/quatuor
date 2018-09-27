require 'test_helper'

class QuartetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @quartet = quartets(:one)
  end

  test "should get index" do
    get quartets_url
    assert_response :success
  end

  test "should get new" do
    get new_quartet_url
    assert_response :success
  end

  test "should create quartet" do
    assert_difference('Quartet.count') do
      post quartets_url, params: { quartet: { country: @quartet.country, image: @quartet.image, label: @quartet.label, style: @quartet.style, title: @quartet.title, uri: @quartet.uri, year: @quartet.year } }
    end

    assert_redirected_to quartet_url(Quartet.last)
  end

  test "should show quartet" do
    get quartet_url(@quartet)
    assert_response :success
  end

  test "should get edit" do
    get edit_quartet_url(@quartet)
    assert_response :success
  end

  test "should update quartet" do
    patch quartet_url(@quartet), params: { quartet: { country: @quartet.country, image: @quartet.image, label: @quartet.label, style: @quartet.style, title: @quartet.title, uri: @quartet.uri, year: @quartet.year } }
    assert_redirected_to quartet_url(@quartet)
  end

  test "should destroy quartet" do
    assert_difference('Quartet.count', -1) do
      delete quartet_url(@quartet)
    end

    assert_redirected_to quartets_url
  end
end
