import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Pienteger® - A software company that you can trust.",
    description: "A software company that you can trust.",
};

const Contact = () => {
    const email = 'email';
    return (
        <>
            <div className="md:px-40 px-5 pt-10">
                <h1 className="text-3xl font-bold mb-2">Contact Us</h1>

                <table>
                    <tbody>
                        <tr>
                            <td className="p-1">

                                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.98706 2.06589L6.27036 2.28192C4.96684 2.67484 4.00944 3.78801 3.81598 5.13565C3.519 7.20438 4.18323 9.62242 5.78368 12.3945C7.38077 15.1607 9.13867 16.9433 11.0739 17.7231C12.3435 18.2346 13.7948 17.9592 14.7886 17.018L15.3314 16.5039C16.0589 15.815 16.1643 14.694 15.5781 13.8815L14.2215 12.0014C13.8458 11.4807 13.1805 11.2569 12.5665 11.4446L10.5158 12.0716L10.4628 12.082C10.2366 12.115 9.7154 11.6259 9.06527 10.4999C8.38512 9.32181 8.24417 8.63298 8.43194 8.45541L9.47529 7.48248C10.2572 6.75332 10.4882 5.60728 10.0499 4.63213L9.38841 3.16075C8.97652 2.24451 7.94888 1.77597 6.98706 2.06589ZM8.47634 3.57077L9.13779 5.04215C9.40063 5.62682 9.26212 6.31395 8.7933 6.75113L7.74739 7.72645C7.0783 8.35918 7.29992 9.44218 8.19924 10.9999C9.04545 12.4655 9.81744 13.1898 10.6469 13.0642L10.7713 13.0376L12.8589 12.4009C13.0635 12.3383 13.2853 12.413 13.4105 12.5865L14.7671 14.4666C15.0603 14.8729 15.0076 15.4334 14.6438 15.7778L14.101 16.2919C13.3911 16.9642 12.3545 17.1609 11.4476 16.7955C9.74957 16.1113 8.14475 14.484 6.64971 11.8945C5.15161 9.29969 4.54531 7.09254 4.80583 5.27775C4.94402 4.31515 5.62787 3.52003 6.55896 3.23937L7.27566 3.02334C7.75657 2.87838 8.27039 3.11265 8.47634 3.57077Z" fill="currentColor" />
                                </svg>
                            </td>
                            <td className="p-1"><span className="font-semibold">Phone:</span></td>
                            <td className="p-1">+88 019 35 03 73 96</td>
                        </tr>
                        <tr>
                            <td className="p-1">
                                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 4C16.8807 4 18 5.11929 18 6.5V14.5C18 15.8807 16.8807 17 15.5 17H4.5C3.11929 17 2 15.8807 2 14.5V6.5C2 5.11929 3.11929 4 4.5 4H15.5ZM17 7.961L10.2535 11.931C10.1231 12.0077 9.96661 12.0205 9.82751 11.9693L9.74649 11.931L3 7.963V14.5C3 15.3284 3.67157 16 4.5 16H15.5C16.3284 16 17 15.3284 17 14.5V7.961ZM15.5 5H4.5C3.67157 5 3 5.67157 3 6.5V6.802L10 10.9199L17 6.801V6.5C17 5.67157 16.3284 5 15.5 5Z" fill="currentColor" />
                                </svg>
                            </td>
                            <td className="p-1"><span className="font-semibold">Email:</span></td>
                            <td className="p-1">pienteger [at] [google's mail service] .com</td>
                        </tr>
                        <tr>
                            <td className="p-1">
                                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 9C13 10.6569 11.6569 12 10 12C8.34315 12 7 10.6569 7 9C7 7.34315 8.34315 6 10 6C11.6569 6 13 7.34315 13 9ZM12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11C11.1046 11 12 10.1046 12 9ZM14.9497 13.955C17.6834 11.2201 17.6834 6.78601 14.9497 4.05115C12.2161 1.31628 7.78392 1.31628 5.05025 4.05115C2.31658 6.78601 2.31658 11.2201 5.05025 13.955L6.57128 15.4538L8.61408 17.4389L8.74691 17.5567C9.52168 18.1847 10.6562 18.1455 11.3861 17.4391L13.8223 15.0691L14.9497 13.955ZM5.75499 4.75619C8.09944 2.41072 11.9006 2.41072 14.245 4.75619C16.5294 7.04153 16.5879 10.7104 14.4207 13.0667L14.245 13.2499L12.9237 14.5539L10.6931 16.7225L10.6002 16.8021C10.2459 17.0699 9.7543 17.0698 9.40012 16.802L9.30713 16.7224L6.3263 13.817L5.75499 13.2499L5.57927 13.0667C3.41208 10.7104 3.47065 7.04153 5.75499 4.75619Z" fill="currentColor" />
                                </svg>
                            </td>
                            <td className="p-1"><span className="font-semibold">Address:</span></td>
                            <td className="p-1">Home Office</td>
                        </tr>
                        <tr>
                            <td className="p-1">
                                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM9.5 5C9.74546 5 9.94961 5.17688 9.99194 5.41012L10 5.5V10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7455 12.8231 10.9496 12.5899 10.9919L12.5 11H9.5C9.25454 11 9.05039 10.8231 9.00806 10.5899L9 10.5V5.5C9 5.22386 9.22386 5 9.5 5Z" fill="currentColor" />
                                </svg>
                            </td>
                            <td className="p-1"><span className="font-semibold">Office Hours:</span></td>
                            <td className="p-1">10:00 AM to 10:00 PM (Saturday to Thursday)</td>
                        </tr>
                        <tr>
                            <td className="p-1">
                                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2C11.6569 2 13 3.34315 13 5V6H14C15.1046 6 16 6.89543 16 8V15C16 16.1046 15.1046 17 14 17H6C4.89543 17 4 16.1046 4 15V8C4 6.89543 4.89543 6 6 6H7V5C7 3.34315 8.34315 2 10 2ZM14 7H6C5.44772 7 5 7.44772 5 8V15C5 15.5523 5.44772 16 6 16H14C14.5523 16 15 15.5523 15 15V8C15 7.44772 14.5523 7 14 7ZM10 10.5C10.5523 10.5 11 10.9477 11 11.5C11 12.0523 10.5523 12.5 10 12.5C9.44772 12.5 9 12.0523 9 11.5C9 10.9477 9.44772 10.5 10 10.5ZM10 3C8.89543 3 8 3.89543 8 5V6H12V5C12 3.89543 11.1046 3 10 3Z" fill="currentColor" />
                                </svg>
                            </td>
                            <td className="p-1"><span className="font-semibold">Office Closed:</span></td>
                            <td className="p-1">Friday, Saturday and Muslim Public Holidays</td>
                        </tr>
                    </tbody>
                </table>

                <form className="mt-5 mb-5 hidden">
                    <label htmlFor={email} className="w-50 mt-5">Your Email</label>
                    <br />
                    <input type="email" name="email" id={email} placeholder="zakir@example.com" className="w-50" />
                    <br />
                    <label htmlFor={email} className="w-50 mt-2">Subject</label>
                    <br />
                    <input type="text" name="email" id={email} placeholder="Interested in ERP" className="w-50" />
                    <br />
                    <label htmlFor={email} className="w-50 mt-2">Body</label>
                    <br />
                    <textarea className="w-50" placeholder="Assalamu Alaikum. I would like to have some insights about your products." />
                    <br />
                    <button type="submit" className="mt-2">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Contact;
