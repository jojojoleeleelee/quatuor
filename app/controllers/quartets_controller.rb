class QuartetsController < ApplicationController
  before_action :set_quartet, only: [:show, :edit, :update, :destroy]

  # GET /quartets
  # GET /quartets.json
  def index
    @quartets = Quartet.all
  end

  # GET /quartets/1
  # GET /quartets/1.json
  def show
  end

  # GET /quartets/new
  def new
    @quartet = Quartet.new
  end

  # GET /quartets/1/edit
  def edit
  end

  # POST /quartets
  # POST /quartets.json
  def create
    @quartet = Quartet.new(quartet_params)

    respond_to do |format|
      if @quartet.save
        format.html { redirect_to @quartet, notice: 'Quartet was successfully created.' }
        format.json { render :show, status: :created, location: @quartet }
      else
        format.html { render :new }
        format.json { render json: @quartet.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /quartets/1
  # PATCH/PUT /quartets/1.json
  def update
    respond_to do |format|
      if @quartet.update(quartet_params)
        format.html { redirect_to @quartet, notice: 'Quartet was successfully updated.' }
        format.json { render :show, status: :ok, location: @quartet }
      else
        format.html { render :edit }
        format.json { render json: @quartet.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /quartets/1
  # DELETE /quartets/1.json
  def destroy
    @quartet.destroy
    respond_to do |format|
      format.html { redirect_to quartets_url, notice: 'Quartet was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quartet
      @quartet = Quartet.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def quartet_params
      params.require(:quartet).permit(:style, :country, :uri, :label, :image, :year, :title)
    end
end
