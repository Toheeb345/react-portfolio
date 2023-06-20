import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import {useForm} from 'react-hook-form';

const Contact = () => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contact" className="py-48">
            {/* HEADINGS */}
            <motion.div 
                 className="flex justify-end w-full"
                 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5}} transition={{ duration: 0.5}} variants={{
                 hidden: { opacity: 0, x: -50},
                 visible: { opacity: 1, x: 0}
                }}>
                    <div>
                    <p className=" font-playfair font-semibold text-4xl">
                      <span className="text-yellow"> SEND ME</span> A MESSAGE
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="mx-auto w-2/4" />
                        </div>
                        </div>
            </motion.div>

            {/* FORM & IMAGE SECTION */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                   className="basis-1/2 flex justify-center"
                   initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5}} transition={{ duration: 0.5}} variants={{
                    hidden: { opacity: 0, y: 50},
                    visible: { opacity: 1, y: 0}
                   }}>
                        <img src="../assets/contact-image.jpeg" alt="contact" />
                </motion.div>

                <motion.div
                   className="basis-1/2 mt-10 md:mt-0"
                   initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5}} transition={{ delay: 0.2,  duration: 0.5}} variants={{
                    hidden: { opacity: 0, y: 50},
                    visible: { opacity: 1, y: 0}
                   }}>

                   <form
                    onSubmit={onSubmit} 
                    target="_blank"
                    action="https://formsubmit.co/307af54cc4768059a883793a52ca1c3d" method="POST">
                        <input className="w-full bg-blue font-semibold placeholder:text-black outline-none p-3" type="text" name="name" placeholder="NAME" {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}/>
                        {errors.name && (
                            <p className="text-red mt-1
                            ">
                                {errors.name.type === 'required' && "This field is required!"}
                                {errors.name.type === 'maxLength' && "Max length is 100 char."}
                            </p>
                        )}

                        <input
                             className="w-full bg-blue font-semibold placeholder:text-black outline-none p-3 mt-5" type="email" name="email" placeholder="EMAIL" {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                         />
                         {errors.email && (
                        <p className="text-red mt-1
                        ">
                        {errors.email.type === 'required' && "This field is required!"}
                        {errors.email.type === 'pattern' && "Invalid email address."}
                        </p>
                        )}


                        <textarea
                             className="w-full bg-blue font-semibold placeholder:text-black outline-none p-3 mt-5" type="text" placeholder="MESSAGE" name="message" 
                             rows={4}
                             cols={50}
                             {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                         />
                         {errors.message && (
                        <p className="text-red mt-1
                        ">
                        {errors.message.type === 'required' && "This field is required!"}
                        {errors.message.type === 'maxLength' && "Max length is 2000 char."}
                        </p>
                        )}

                        <button type="submit" className="px-5 py-3 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 rounded-md">SUBMIT</button>
                   </form>
                   </motion.div>
            </div>

        </section>
    );
}
 
export default Contact;