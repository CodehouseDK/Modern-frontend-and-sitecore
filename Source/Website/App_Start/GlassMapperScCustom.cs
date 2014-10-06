using System.Dynamic;
using Castle.MicroKernel.Registration;
using Castle.Windsor;
using Glass.Mapper.Configuration;
using Glass.Mapper.Pipelines.ObjectConstruction;
using Glass.Mapper.Sc.CastleWindsor;

namespace Website.App_Start
{
    public static  class GlassMapperScCustom
    {
		public static void CastleConfig(IWindsorContainer container){
            var config = new Config();

            container.Register(
               Component.For<IObjectConstructionTask>().ImplementedBy<SimpleInjectorTask>().LifestylePerWebRequest()
              );
            //  config.EnableCaching = false;

            container.Install(new SitecoreInstaller(config));
		}

		public static IConfigurationLoader[] GlassLoaders(){			
			
			/* USE THIS AREA TO ADD FLUENT CONFIGURATION LOADERS
             * 
             * If you are using Attribute Configuration or automapping/on-demand mapping you don't need to do anything!
             * 
             */

			return new IConfigurationLoader[]{};
		}
		public static void PostLoad(){
			//Remove the comments to activate CodeFist
			/* CODE FIRST START
            var dbs = Sitecore.Configuration.Factory.GetDatabases();
            foreach (var db in dbs)
            {
                var provider = db.GetDataProviders().FirstOrDefault(x => x is GlassDataProvider) as GlassDataProvider;
                if (provider != null)
                {
                    using (new SecurityDisabler())
                    {
                        provider.Initialise(db);
                    }
                }
            }
             * CODE FIRST END
             */
		}
    }

    public class SimpleInjectorTask : IObjectConstructionTask
    {
        private static readonly object _lock = new object();

        public void Execute(ObjectConstructionArgs args)
        {
            //check that no other task has created an object
            //also check that this is a dynamic object
            if (args.Result == null && !args.Configuration.Type.IsAssignableFrom(typeof(IDynamicMetaObjectProvider)))
            {
                //check to see if the type is registered with the SimpleInjector container
                //if it isn't added it
                if (SimpleInjectorInitializer.Container.GetRegistration(args.Configuration.Type) == null)
                {
                    lock (_lock)
                    {
                        if (SimpleInjectorInitializer.Container.GetRegistration(args.Configuration.Type) == null)
                        {
                            SimpleInjectorInitializer.Container.Register(args.Configuration.Type);
                        }
                    }
                }

                //create instance using SimpleInjector
                var obj = SimpleInjectorInitializer.Container.GetInstance(args.Configuration.Type);

                //map properties from item to model
                args.Configuration.MapPropertiesToObject(obj, args.Service, args.AbstractTypeCreationContext);

                //set the new object as the returned result
                args.Result = obj;
            }
        }
    }
 
}
