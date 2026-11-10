import ServicesPageContent from "@/components/ServicesPageContent";
import { servicePackages } from "@/data/services";

export default function ServicesPage() {
  return <ServicesPageContent locale="ru" packages={servicePackages} />;
}
