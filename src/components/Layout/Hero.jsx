import { Link } from "react-router-dom";
import heroImage from "../../assets/MaxHero.png"; // pastikan path sesuai

const Hero = () => {
  return (
    <section
      className="min-h-[520px] md:min-h-[700px] w-full text-black flex items-center justify-center px-4 sm:px-6 lg:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20 p-6 rounded-xl">
        
        {/* Left Content */}
        <div className="w-full flex flex-col space-y-6 text-center max-w-xl -mt-12 md:mt-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-700">
              Max
            </span>
            supply <br />
            <span className="font-light tracking-wide">Ready to Wear</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white px-2 sm:px-0">
            Koleksi eksklusif dari bahan berkualitas tinggi dan jahitan terbaik.
            Dirancang untuk kenyamanan dan gaya maksimal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
            <Link
              to="/shop"
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-red-500/40 transition duration-300"
            >
              Pesan Sekarang
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-black transition duration-300"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
