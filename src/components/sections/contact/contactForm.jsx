import { useForm, Controller } from 'react-hook-form';
import { useRef } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../config/db';

const ContactForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const form = useRef();

    const onSubmit = async (data) => {
        console.log(data);
        const docRef = await addDoc(collection(db, "information"), {
           email:data.email,
           name:data.name,
           message:data.message,
        });

        console.log("Document written with ID: ", docRef.id);


    };

    return (
        <div className="col-lg-8">
            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form ref={form} onSubmit={handleSubmit(onSubmit)} id="contactForm" className="contactForm" name="contactForm" action="assets/php/form-process.php" method="post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input {...field} type="text" className="form-control" placeholder="Steve Milner" />
                                    )}
                                    rules={{ required: 'Please enter your Name' }}
                                />
                                {errors.name && <span className="text-danger">{errors.name.message}</span>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input {...field} type="email" className="form-control" placeholder="hello@websitename.com" />
                                    )}
                                    rules={{ required: 'Please enter your Email' }}
                                />
                                {errors.email && <span className="text-danger">{errors.email.message}</span>}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <Controller
                                    name="message"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <textarea {...field} className="form-control" rows="4" placeholder="Write Your message"></textarea>
                                    )}
                                    rules={{ required: 'Please Write your Message' }}
                                />
                                {errors.message && <span className="text-danger">{errors.message.message}</span>}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-0">
                                <button type="submit" className="theme-btn">
                                    Send Me Message
                                </button>
                                <div id="msgSubmit" className="hidden"></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
