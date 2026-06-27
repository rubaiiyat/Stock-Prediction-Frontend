export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="card bg-base-200   w-6/12  shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold justify-center">
            Stock Prediction App
          </h2>

          <p>
            Empower your investment journey with AI-powered stock market
            predictions. Our intelligent platform analyzes historical trends and
            market patterns to provide valuable insights, helping you make
            confident, data-driven decisions and stay ahead in an ever-changing
            financial market.
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-accent">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
