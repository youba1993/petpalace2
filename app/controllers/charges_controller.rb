require 'stripe'

class ChargesController < ApplicationController
    
    def  create 
        Stripe.api_key = Rails.application.credentials.stripe_secret_key
   
        begin
            user = Stripe::Customer.create(
                :email => current_user.email,
                :source => params[:charge][:token]
            )
            charge = Stripe::Charge.create({
                :customer => current_user.id,
                :amount => params[:charge][:amount],
                :currency => "usd"
            },{
                :idempotency_key => user_session
            })

            render json: charge, status: 200
            
        rescue Stripe::CardError => exception
            render json: { message: 'error' }, status: :not_acceptable
        end
   
    end
end
