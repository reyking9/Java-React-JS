package com.vacunacion.inventario;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@SpringBootApplication
public class InventarioVacunacionApplication {
  
  //  private JdbcTemplate jdbcTemplate;
	public static void main(String[] args) {
		SpringApplication.run(InventarioVacunacionApplication.class, args);
               } 
      
    //    private UsuariosRepository usuariosRepositorio;
        
        
        
      /*  public void run(String... args) throws Exception{
         //   this.usuariosRepositorio.save(new Usuarios("1350352777", "Rey", "Mera", "rey@hotmail.com", "qqq", "asda", "sda", true, "s", "sa", 10));
      /*      String sql = "INSERT INTO Usuarios (Cedula, Nombres, Apellidos, Email, FechaNacimiento, DireccionDomicilio, TelefonoMovil, EstadoVacuna, TipoVacuna,FechaVacuna, NumeroDosis ) VALUES ("
                    + "'1350352777', 'Rey', 'Mera', 'rey@hotmail.com', 'qqq', 'asda', 'sda', true, 's', 'sa', 10)";
            int row = jdbcTemplate.update(sql);
            if (row > 0){
                System.out.println("Agregadas con exito");
            }
        }*/
        
        @Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedOrigins("http://localhost:3000").allowedMethods("PUT", "DELETE","GET","POST").allowedHeaders("*");
			}
		};
	}
        @Configuration
        @EnableWebMvc
        public class WebConfig implements WebMvcConfigurer {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/*")   // users
                    .allowedOrigins("http://localhost:3000")          // this is the React front end server
                    .allowedMethods("PUT", "DELETE","GET","POST")
                    .allowedHeaders("header1", "header2", "header3")
                    .exposedHeaders("header1", "header2")
                    .allowCredentials(false).maxAge(3600);

    }

}
  
        
}
