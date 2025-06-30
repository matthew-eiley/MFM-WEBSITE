export default function ProgressionTimeline() {
    const progressionData = [
      {
        level: 1,
        program: "General Membership",
        openTo: "All McGill students",
        application: "No application",

        isTop: true,
      },
      {
        level: 2,
        program: "Junior Analyst",
        openTo: "Anyone, Primarily Lower-Years",
        application: "Formal Application",
      },
      {
        level: 3,
        program: "Senior Analyst",
        openTo: "Junior Analysts, Upper-Years",
        application: "Promotion or Formal Application",

      },
      {
        level:4,
        program: "Fund Manager",
        openTo: "Top Senior Analysts",
        application: "Promotion only",
        isBottom: true,
      },
    ]      
        return (
          <div className="container mx-auto mb-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Central connecting line */}
                <div
                  className="absolute bg-gray-200"
                  style={{
                    left: "50%",
                    top: "60px",
                    bottom: "60px",
                    width: "2px",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                ></div>
      
                {progressionData.map((item, index) => (
                  <div key={item.level} className="relative mb-16">
                    {/* Timeline dot and number */}
                    <div
                      className="absolute flex items-center justify-center"
                      style={{
                        left: "50%",
                        top: "20px",
                        transform: "translateX(-50%)",
                        zIndex: 10,
                      }}
                    >
                      <div className="text-center">
                        <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full text-sm font-bold flex items-center justify-center mb-2">
                          {item.level}
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                            item.isTop
                              ? "bg-navy"
                              : item.level === 3
                                ? "bg-blue"
                                : item.level === 2
                                  ? "text-blue-800"
                                  : "bg-gray-200"
                          }`}
                          style={{
                            backgroundColor: item.isTop
                              ? "#6b0000"
                              : item.level === 3
                                ? "#bc1717"
                                : item.level === 2
                                  ? "#4b5563"
                                  : "#e5e7eb",
                          }}
                        ></div>
                      </div>
                    </div>
      
                    {/* Content card */}
                    <div className="grid grid-cols-2 gap-8">
                      {/* Left side content for even indices */}
                      {index % 2 === 0 && (
                        <div className="text-right">
                          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg inline-block w-full max-w-80">
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-2xl font-bold font-serif mb-2 text-gray-600">{item.program}</h3>
                              </div>
      
                              <div className="space-y-3">
                                <div>
                                  <p className="text-sm font-semibold text-blue-800 text-uppercase tracking-wide mb-1">Open To</p>
                                  <p className="text-sm font-bold text-gray-600 font-serif tracking-wide mb-1">{item.openTo}</p>
                                </div>
      
                                <div>
                                <p className="text-sm font-bold text-blue-800 font-serif text-uppercase tracking-wide mb-1">Application</p>
                                <p className="text-sm font-bold text-gray-600 font-serif tracking-wide mb-1">{item.application}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
      
                      {/* Right side content for odd indices */}
                      {index % 2 === 1 && <div></div>}
                      {index % 2 === 1 && (
                        <div>
                          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg w-full max-w-80">
                            <div className="space-y-4">
                              <div>
                              <h3 className="text-2xl font-bold font-serif mb-2 text-gray-600">{item.program}</h3>
                              </div>
      
                              <div className="space-y-3">
                                <div>
                                  <p className="text-sm font-bold text-blue-800 font-serif text-uppercase tracking-wide mb-1">Open To</p>
                                  <p className="text-sm font-bold text-gray-600 font-serif tracking-wide mb-1">{item.openTo}</p>
                                </div>
      
                                <div>
                                <p className="text-sm font-bold text-blue-800 font-serif text-uppercase tracking-wide mb-1">Application</p>
                                <p className="text-sm font-bold text-gray-600 font-serif tracking-wide mb-1">{item.application}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
      
                      {/* Empty div for even indices right side */}
                      {index % 2 === 0 && <div></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }
      