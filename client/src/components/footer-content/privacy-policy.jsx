import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded"
          >
            Back
          </button>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Privacy Policy for Clay Crafts</h1>
          <p className="text-gray-600 mb-4">Effective Date: 31<sup>st</sup> Aug 2024</p>
          
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Types of Data Collected</h2>
          
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Personal Data</h3>
          <p className="text-gray-700 mb-4">
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-gray-800">Cookies and Usage Data</h3>
          <p className="text-gray-700 mb-4">
            We may also collect information on how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-800">Tracking & Cookies Data</h3>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
          </p>
          <p className="text-gray-700 mb-4">
            Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
          </p>
          <p className="text-gray-700 mb-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>
          <p className="text-gray-700 mb-4">Examples of Cookies we use:</p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Session Cookies. We use Session Cookies to operate our Service.</li>
            <li>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</li>
            <li>Security Cookies. We use Security Cookies for security purposes.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Use of Data</h2>
          <p className="text-gray-700 mb-4">
            Clay Crafts uses the collected data for various purposes:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Transfer of Data</h2>
          <p className="text-gray-700 mb-4">
            Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.
          </p>
          <p className="text-gray-700 mb-4">
            If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there.
          </p>
          <p className="text-gray-700 mb-4">
            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
          </p>
          <p className="text-gray-700 mb-4">
            Clay Crafts will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Disclosure of Data</h2>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Legal Requirements</h3>
          <p className="text-gray-700 mb-4">
            Clay Crafts may disclose your Personal Data in the good faith belief that such action is necessary to:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>To comply with a legal obligation</li>
            <li>To protect and defend the rights or property of Clay Crafts</li>
            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>To protect the personal safety of users of the Service or the public</li>
            <li>To protect against legal liability</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Security of Data</h2>
          <p className="text-gray-700 mb-4">
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Service Providers</h2>
          <p className="text-gray-700 mb-4">
            We may employ third-party companies and individuals to facilitate our Service (“Service Providers”), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
          </p>
          <p className="text-gray-700 mb-4">
            These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
