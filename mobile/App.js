import React from 'react';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import Routes from './src/routes'

/**
 * View = Div, Header, Footer, Section (Container)
 * Text = Qualquer tipo de texto
 * 
 * Não existe className ou estilos css. Tem que importar StylesSheet
 */


export default function App() {
  return (
    <Routes />
  );
}

/**
 * Todo componente é display flex por padrão
 * As propriedades usam Camel Case e os valores sempre precisam das ''
 * Não existe herança de estilos, cada componente precisa da sua estilização
 * Estilização própria por elemento
 */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7159c1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
