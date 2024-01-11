import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from '../components/Model';

const Contact = () => {
	const [isFormVisible, setIsFormVisible] = useState(true);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = async () => {
		try {
			const templateParams = {
				email,
				subject,
				message,
			};

			const response = await emailjs.send(
				'service_uod8b97',
				'template_pri7og4',
				templateParams,
				'keAW5fe8eZKnbgpAB'
			);

			console.log('Email sent successfully', response);
		} catch (error) {
			console.error('Failed to send email', error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		sendEmail();

		setEmail('');
		setSubject('');
		setMessage('');

		setIsFormVisible(false);
		setIsModalVisible(true);

		setTimeout(() => {
			setIsFormVisible(true);
			setIsModalVisible(false);
		}, 5000);
	};

	return (
		<>
			<section className=" w-full flex justify-center h-screen ">
				<div className=" relative w-[90%] md:w-[70%] lg:w-[50%]">
				<h1 className="text-center mx-12 md:mx-0 lg:mx-16 mt-10 text-[1.5em] md:text-3xl mb-10 text-gray-100">Contact Us</h1>
					{isFormVisible && (
						<form action="#" className="space-y-8 px-5" onSubmit={handleSubmit}>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm  text-gray-300">Your email</label>
								<input
									type="email"
									id="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="name@example.com"
									className=" border text-gray-300 bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 focus:placeholder-transparent placeholder-gray-500"
									required
								/>

							</div>
							<div>
								<label htmlFor="subject" className="block mb-2 text-sm  text-gray-300">Subject</label>
								<input type="text" id="subject" onChange={(e) => setSubject(e.target.value)} placeholder="Let us know how I can help you" name="subject" className="border text-gray-300 bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 focus:placeholder-transparent placeholder-gray-500" required />
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="message" className="block mb-2 text-sm  text-gray-300">Your message</label>
								<textarea
									id="message"
									name="message"
									rows="6"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									className="border text-gray-300 bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 focus:placeholder-transparent placeholder-gray-500"
									placeholder="Leave a comment..." required />
							</div>
							<button type="submit" className="inline-flex items-center justify-center py-2 px-2 w-32 md:px-5 md:w-44 md:py-3 text-xs md: md:text-sm text-center tracking-wider bg-gray-200 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 ">Send message</button>
						</form>
					)}
				</div>
			</section>
			<Modal isVisible={isModalVisible} />
		</>
	)
};

export default Contact;


