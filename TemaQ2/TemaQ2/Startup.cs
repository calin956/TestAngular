using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TemaQ2.Startup))]
namespace TemaQ2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
