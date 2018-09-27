require "application_system_test_case"

class QuartetsTest < ApplicationSystemTestCase
  setup do
    @quartet = quartets(:one)
  end

  test "visiting the index" do
    visit quartets_url
    assert_selector "h1", text: "Quartets"
  end

  test "creating a Quartet" do
    visit quartets_url
    click_on "New Quartet"

    fill_in "Country", with: @quartet.country
    fill_in "Image", with: @quartet.image
    fill_in "Label", with: @quartet.label
    fill_in "Style", with: @quartet.style
    fill_in "Title", with: @quartet.title
    fill_in "Uri", with: @quartet.uri
    fill_in "Year", with: @quartet.year
    click_on "Create Quartet"

    assert_text "Quartet was successfully created"
    click_on "Back"
  end

  test "updating a Quartet" do
    visit quartets_url
    click_on "Edit", match: :first

    fill_in "Country", with: @quartet.country
    fill_in "Image", with: @quartet.image
    fill_in "Label", with: @quartet.label
    fill_in "Style", with: @quartet.style
    fill_in "Title", with: @quartet.title
    fill_in "Uri", with: @quartet.uri
    fill_in "Year", with: @quartet.year
    click_on "Update Quartet"

    assert_text "Quartet was successfully updated"
    click_on "Back"
  end

  test "destroying a Quartet" do
    visit quartets_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Quartet was successfully destroyed"
  end
end
