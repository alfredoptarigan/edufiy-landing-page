import Card from "./utils/Card";
export default function MostPopular() {
  return (
    <div className="p-3 pb-10 lg:pl-24">
      <p className="text-2xl mb-3 font-medium text-blue-900">
        Kelas Populer 🔥
      </p>
      <p className="text-lg mb-5 leading-relaxed text-teal-600">
        Kelas ini dibuat oleh mentor yang sangat ahli dalam bidang nya dan
        <br /> jangan sampai ketinggalan !
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          title="Launch career as a web designer and learning"
          badgeColor="bg-gray-200"
          price={200}
          badgeTitle="Web Development"
          students="100"
          rating="4.2"
          widthAvatar={10}
          path="/images/teachers/alfredo.jpg"
          alt="Alfredo Patricius Tarigan"
          bannerImagePath="/images/banners/javascript-development.jpg"
          courseName="Launch career as a web designer and learning"
        />
        <Card
          title="Launch career as a Python Development Learning"
          badgeColor="bg-pink-200"
          price={100}
          badgeTitle="Software Development"
          students="70"
          rating="4.1"
          widthAvatar={10}
          path="/images/teachers/alfredo.jpg"
          alt="Alfredo Patricius Tarigan"
          bannerImagePath="/images/banners/python-course.jpg"
          courseName="Launch career as a Python Development Learning"
        />
        <Card
          title="Launch career as a Digital Marketing Learning"
          badgeColor="bg-green-200"
          price={150}
          badgeTitle="Business Automation"
          students="90"
          rating="4.9"
          widthAvatar={10}
          path="/images/teachers/aleina.jpg"
          alt="Aleina"
          bannerImagePath="/images/banners/business-automation.jpg"
          courseName="Launch career as a Digital Marketing Learning"
        />
      </div>
    </div>
  );
}
