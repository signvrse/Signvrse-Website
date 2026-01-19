import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendContactEmail = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  hearingImpaired?: string;
  company?: string;
  subject: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      company: formData.company || 'N/A',
      hearing_impaired: formData.hearingImpaired || 'N/A',
      subject: formData.subject,
      message: formData.message,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return { success: true, message: 'Email sent successfully!', response };
    } else {
      return { success: false, message: 'Failed to send email. Please try again.', error: response };
    }
  } catch (error: any) {
    console.error('EmailJS Error:', error);
    return { 
      success: false, 
      message: 'Failed to send email. Please check your connection.',
      error 
    };
  }
};

export const sendNewsletterEmail = async (email: string) => {
  try {
    const templateParams = {
      subject: 'New Newsletter Subscription',
      message: `New subscriber: ${email}`,
      from_email: email,
      from_name: 'Subscriber'
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return { success: true, message: 'Successfully subscribed!', response };
    } else {
      return { success: false, message: 'Failed to subscribe. Please try again.', error: response };
    }
  } catch (error: any) {
    console.error('EmailJS Error:', error);
    return { 
      success: false, 
      message: 'Failed to subscribe. Please check your connection.',
      error 
    };
  }
};
