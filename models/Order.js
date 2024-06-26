import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		orderItems: [
			{
				name: { type: String, required: true },
				quantity: { type: Number, required: true },
				image: { type: String, required: true },
				price: { type: Number, required: true },
			},
		],
		shippingAddress: {
			fullName: { type: String, required: true },
			address: { type: String, required: true },
			postalCode: { type: String, required: true },
			phone: { type: Number, required: true },
		},
		paymentMethod: { type: String, required: true },
		paymentResult: { id: String, status: String, email_address: String },
		itemsPrice: { type: Number, required: true },
		shippingPrice: { type: Number, required: true },
		taxPrice: { type: Number, required: true },
		totalPrice: { type: Number, required: true },
		isPaid: { type: Boolean, default: false },
		isDelivered: { type: Boolean, default: false },
		paidAt: { type: Date },
		deliveredAd: { type: Date },
	},
	{
		timestamps: true, //to automatically add time to the model
	}
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;
