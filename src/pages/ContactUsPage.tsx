import Banner from "@/components/Banner";
import PartnerWithUs from "@/components/contact/PartnerWithUs";
import DisclaimerComponent from "@/components/home/DisclaimerComponent";

const ContactUsPage = () => {
  return (
    <div>
      <Banner title="Contact Us" />
      <PartnerWithUs />
      <DisclaimerComponent />
    </div>
  );
};

export default ContactUsPage;
