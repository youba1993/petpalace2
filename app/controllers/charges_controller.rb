require 'stripe'

class ChargesController < ApplicationController
    
    def  create 
        Stripe.api_key = Rails.application.credentials.fetch(:stripe_secret_key)
        
        begin
            customer = Stripe::Customer.create({
                email: current_user.email,
                description: 'My First Test Customer',
            })
            charge = Stripe::PaymentIntent.create({
                :amount => params[:charge][:amount].to_i * 100,
                :currency => "usd",
                :customer => customer.id
            })

            render json: charge, status: 200

        rescue Stripe::CardError => exception
            render json: { message: 'error' }, status: :not_acceptable
        end
   
    end
end
