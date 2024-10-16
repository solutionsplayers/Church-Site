import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(
            'pk_test_51OWzQfFGLFbgVokAIzI9E2KhEnWQ2e948P34Aus9jTrHuTFRHCNgzH0Jz3DAYfDkjEHrY3cFkde1DMkEmvvAAsqJ00q5gB1e1i');
    }
    return stripePromise;
};

export default getStripe;