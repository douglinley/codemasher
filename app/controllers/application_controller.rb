class ApplicationController < ActionController::API
	before_filter :allow_cross_domain_access
    def allow_cross_domain_access
        headers['Access-Control-Allow-Origin'] = '*'
		headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
		headers['Access-Control-Request-Method'] = '*'
		headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    end
end
