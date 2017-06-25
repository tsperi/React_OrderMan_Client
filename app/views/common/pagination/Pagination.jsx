/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description The represents a reusable pagination component that can be used with tables.
 *
 * @description Has a variable number of pages, and click handlers to change the page.
 *
 * @description We'll cover the logic of this in class!
 *
 * @description This component takes two props:
 *     handlePageChange - function to handle clicking on a new page number
 *     pagination - object of pagination results
 *         total - total number of results
 *         limit - the number of results per page
 *         page - the page number
 *         pages - the total number of pages
 *
 *
 * PropTypes = {
 *   handlePageChange: PropTypes.func.isRequired,
 *   pagination: PropTypes.shape({
 *     total: PropTypes.number,
 *     limit: PropTypes.number,
 *     page: PropTypes.number,
 *     pages: PropTypes.number,
 *   }).isRequired,
 * };
 *
 * DefaultProps = {};
 *
 * @exports The Pagination component
 */
