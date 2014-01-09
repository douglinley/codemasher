require 'rubygems'
require 'httparty'

class SessionController < ApplicationController
	include ActionController::MimeResponds

	def index 
		response = HTTParty.get('http://cdn.eventboard.falafel.com/conferencecatalogs/codemash2014.59.data.json');
		render :json => response
	end
end
