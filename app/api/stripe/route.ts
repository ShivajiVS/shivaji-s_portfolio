import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const createOrder = async (userId: string, cartItems: any) => {
  const order = await prisma.order.create({
    data: {
      userId,
      status: "UNPAID",
      products: {
        create: cartItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      },
    },
  });

  return order;
};

export const POST = async (request: Request) => {
  const body: { cartItems } = await request.json();

  const { cartItems } = body;

  console.log(cartItems);

  const userSession = true;

  if (!userSession)
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.product.name,
          },
          unit_amount: item.product.price * 100,
        },
        quantity: item.quantity,
      })),
      metadata: {
        userId: userSession.user.id,
      },
      mode: "payment",
      success_url: `http://localhost:3000/orders/${order.id}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/orders/${order.id}?cancelled=true`,
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (err) {
    console.error((err as Error).message);

    return NextResponse.json(
      {
        error: (err as Error).message,
      },
      { status: 500 }
    );
  }
};
