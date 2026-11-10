import ServicesPageContent from "@/components/ServicesPageContent";
import { servicePackagesEn } from "@/data/services.en";

export default function ServicesPageEn() {
  return <ServicesPageContent locale="en" packages={servicePackagesEn} />;
}
