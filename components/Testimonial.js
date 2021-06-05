import CardTestimonial from "./utils/CardTestimonial";

export default function Testimonial() {
  return (
    <div className="p-3 pb-32 lg:pl-24 ">
      <p className="text-2xl mb-3 font-medium text-blue-900">Our Members</p>
      <p className="text-lg mb-5 leading-relaxed text-teal-600">
        Ulasan dari members yang sudah mengikuti kelas kami!
      </p>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-y-4 lg:gap-y-0 lg:grid-cols-3 lg:gap-6 ">
          <CardTestimonial
            name="Hirosi Nakamura"
            testimonial="Kelas yang diberikan sangat bagus dan materi yang diajar sangat mudah dimengerti, terimakasih!"
            avatar="/images/students/hirosi.jpg"
            altName="Hirosi Nakamura"
          />
          <CardTestimonial
            name="Albedo"
            testimonial="Materi frontend dan backend nya sangat bagus, recommend banget!"
            avatar="/images/students/albedo.jpg"
            altName="Albedo"
          />
          <CardTestimonial
            name="Venti Barbatos"
            testimonial="Ilmu yang diberikan dapat mudah diterapkan di dunia bisnis !"
            avatar="/images/students/venti.png"
            altName="Venti Barbatos"
          />
        </div>
      </div>
    </div>
  );
}
