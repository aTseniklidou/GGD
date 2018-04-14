// const queries = require('./queries');
// const _ = require('lodash');
// const getLink = (links, id) =>
//   links[0].find(l => l.id === id && l.type === 'website') ||
//   links[0].find(l => l.id === id && l.type === 'websiteD') ||
//   links[0].find(l => l.id === id && l.type === 'websiteP') ||
//   links[0].find(l => l.id === id && l.type === 'indiedb') ||
//   links[0].find(l => l.id === id && l.type === 'facebook') ||
//   links[0].find(l => l.id === id);
//
// module.exports = function (app, pool) {
//
//   app.get('/api/stats/companies', (req, res, next) => {
//     // Get a Postgres client from the connection pool
//     pool.connect().then(client =>
//       client
//         .query(queries[`${req.params.category}Companies`])
//         .then(resCompanies => {
//           res.json({
//             totalActiveCompanies: resCompanies.rows.filter(c => c.status === 'Active').length,
//             companiesByYear: _.groupBy(resCompanies.rows, 'date'),
//         //    companiesByLocation: ,
//
//             filtersData: {
//               locations: _.uniq(_.flatten(resCompanies.rows.filter(r => r.location).map(c => c.location.split(',')))).sort(),
//               foundationYears: _.uniq(resCompanies.rows.filter(r => r.date).map(c => c.date)).sort(),
//             },
//             itemsData:
//             resCompanies.rows.map(c => {
//               const {
//                 name,
//                 image,
//                 date,
//                 type,
//                 status,
//                 description,
//                 links,
//                 contentlinks,
//                 content,
//                 location,
//               } = c;
//               return {
//                 name,
//                 image,
//                 description,
//                 type,
//                 other: [date, status, type, location],
//                 links1: links[0],
//                 content: content && content[0].map(g => {
//                   const link = getLink(contentlinks, g.id);
//                   return {
//                     name: g.name,
//                     status: g.status,
//                     link: link && link.url,
//                   };
//                 }),
//                 tags: `${status},${type},${location},${date}`.split(','),
//               };
//             })
//           });
//           client.release();
//         })
//         .catch(e => {
//           client.release();
//           console.error('query error', e.message, e.stack);
//         })
//     );
//   });
//
//   app.get('/api/totalGames', (req, res, next) => {
//     // Get a Postgres client from the connection pool
//     pool.connect().then(client =>
//       client
//         .query('SELECT COUNT(*) FROM vg')
//         .then(result => {
//           res.json(result.rows[0]);
//           client.release();
//         })
//         .catch(e => {
//           client.release();
//           console.error('query error', e.message, e.stack);
//         })
//     );
//   });
//   app.get('/api/totalTeams', (req, res, next) => {
//     // Get a Postgres client from the connection pool
//     pool.connect().then(client =>
//       client
//         .query('SELECT COUNT(*) FROM vgcom')
//         .then(result => {
//           res.json(result.rows[0]);
//           client.release();
//         })
//         .catch(e => {
//           client.release();
//           console.error('query error', e.message, e.stack);
//         })
//     );
//   });
//
//   app.get('/api/stats/games', (req, res, next) => {
//     // Get a Postgres client from the connection pool
//     pool.connect().then(client =>
//       client
//         .query(queries.queryGames)
//         .then(resGames => {
//           res.json({
//             releasesYears: _.uniq(resGames.rows.filter(r => r.date).map(c => c.date)).sort(),
//             itemsData:
//             resGames.rows.map(g => {
//               const {
//                 name,
//                 style,
//                 genre,
//                 modes,
//                 image,
//                 date,
//                 status,
//                 description,
//                 links,
//                 comlinks,
//                 companies,
//               } = g;
//               return {
//                 name,
//                 image,
//                 description,
//                 other: [date, status],
//                 links1: links[0].filter(l => l.category === 'media'),
//                 links2: links[0].filter(l => l.category === 'platform'),
//                 content: companies[0].map(c => {
//                   const link = getLink(comlinks, c.name);
//                   return {
//                     name: c.name,
//                     status: c.status,
//                     link: link && link.url,
//                   };
//                 }),
//                 tags: `${status},${genre},${modes},${style},${date}`
//                   .split(',')
//                   .concat(links[0].map(l => l.type)),
//                 displayedtags: `${genre},${modes},${style}`.split(','),
//               };
//             })
//           });
//           client.release();
//         })
//         .catch(e => {
//           client.release();
//           console.error('query error', e.message, e.stack);
//         })
//     );
//   });
//
// }
