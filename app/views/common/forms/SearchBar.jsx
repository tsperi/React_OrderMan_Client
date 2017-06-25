/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description The SearchBar component represents a reusable input that is used as a search bar.
 *
 * @description The component takes three props:
 *     disabled: boolean
 *     placeholder: string
 *     handleSearch: function
 *
 * @description The component renders a text input
 *
 * @description Component debounces the onChange event of the input.
 *
 * @description The change handlers then calls the handleSearch prop with the event.target.value.
 *
 * PropTypes = {
 *   disabled: PropTypes.bool.isRequired,
 *   handleSearch: PropTypes.func.isRequired,
 *   placeholder: PropTypes.string.isRequired,
 * };
 *
 * DefaultProps = {};
 *
 * @exports The SearchBar component
 */
