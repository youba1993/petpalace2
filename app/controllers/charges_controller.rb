require 'stripe'

class ChargesController < ApplicationController
    
    def  create 
        Stripe.api_key = Rails.application.credentials.stripe_test_key
   
        begin
            user = Stripe::Customer.create(
                :email => current_user.email,
                :source => params[:charge][:token]
            )
            charge = Stripe::Charge.create({
                :customer => customer.id,
                :amount => params[:charge][:amount],
                :currency => params[:charge][:currency]
            },{
                :idempotency_key => 
            })
        rescue Stripe::CardError => exception
            render json: { message: 'error' }, status: :not_acceptable
        end
   
    end
end
